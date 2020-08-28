import React, { Component } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { TextInputComponent } from '../../../common';
import IMAGES from '../../../assets/images'
import styles from './styles';
import { getFoodList } from '../../../config/foodListJson';
import { searchFoodList } from '../../../config/commonFunctions';

class FoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: getFoodList.categories,
      searchedValue: '',
      categName: '',
      show: false
    }
  }

  dropDownPress = (categoryName) => {
    const { categName } = this.state;
    if (categName === categoryName) {
      this.setState({ categName: '', show: false })
    }
    else {
      this.setState({ categName: categoryName, show: false })
    }
  }

  onSearch = (text) => {
    if (text) {
      this.setState({ searchedValue: text, show: true }, () => {
        const searchedCategories = searchFoodList(text, getFoodList.categories)
        this.setState({ categories: searchedCategories })
      })
    }
    else {
      this.setState({ categories: getFoodList.categories, searchedValue:'', show: false })
    }
  }

  render() {
    const { searchedValue, categories, categName, show } = this.state;
    return (
      <ScrollView style={styles.container}>
         {/* 
              title
          */} 
        <Text style={styles.title}>{'Approved Foods List'}</Text>
        
          {/* 
              search box
          */} 
        <TextInputComponent
          onChangeText={(text)=>{this.onSearch(text)}}
          value={searchedValue}
        />

        {categories && categories.length && categories.map((catName) => {
          const colorCode = catName && catName.category && catName.category.colorCode
          const categoryName = catName && catName.category && catName.category.categoryName
          const servingSize = catName && catName.category && catName.category.servingSize
          const quote = catName && catName.category && catName.category.quote
          const protip = catName && catName.category && catName.category.protip
          
          {/* 
              category name box
          */} 
          return (
            <ScrollView style={{margin:10}}>
              {categoryName ?
                <TouchableOpacity style={[styles.foodListContainer, styles.padding, styles.borderRadius]} onPress={() => { this.dropDownPress(categoryName) }}>
                  <View style={styles.content}>
                    <Image
                      source={IMAGES.time}
                      style={[styles.foodIcon, { tintColor: colorCode }]}
                      resizeMode="contain"
                    />
                    <View style={styles.content}>
                      <Text style={[styles.text, { marginLeft: 10, color: colorCode }]}>{categoryName}</Text>
                      {servingSize && <Text style={styles.text}>{` (${servingSize})`}</Text>}
                    </View>
                  </View>
                  <Image
                    source={IMAGES.downArrowImg}
                    style={styles.downArrowIcon}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                : null}
              
              {/* 
              food list
              */}

              {(categName === categoryName || show) ? catName && catName.category && catName.category.subcategories.map((subCatName) => {
                const subCategoryname = subCatName && subCatName.subCategoryname
                return (
                  <ScrollView>
                    <View style={styles.list}>
                    {subCatName.items.length >=1 && subCategoryname ? <View style={[styles.padding, styles.border]}>
                    <Text style={{ fontSize: 12, color: colorCode }}>{subCategoryname.toUpperCase()}</Text>
                    </View> : null}
                    {subCatName.items.map((subCatItemsName, key) => {
                      return (<View style={[styles.padding, styles.border]}>
                        <Text style={{ fontSize: 12 }} key={key}>{subCatItemsName}</Text>
                      </View>
                      )
                    })}
                      
                     {/* 
                        quote
                     */}  

                    {quote ?
                        <View style={[styles.quote, styles.borderRadius]}>
                          <Text style={{ fontSize: 12 }} >{quote}</Text>
                        </View> : null}
                    </View>

                       {/* 
                        protip
                       */} 
                    
                    {protip ?
                      <View style={[styles.protip, styles.borderRadius, { backgroundColor: colorCode, borderColor: colorCode }]}>
                        <Text style={styles.protipText} >{'PRO TIP'}</Text>
                        <Text style={styles.protipText} >{protip}</Text>
                      </View> : null}
                  </ScrollView>
                )
              })
                : null
              }
            </ScrollView>
          )
        })
          }
      </ScrollView>
    )
  }
}

export default FoodList;
