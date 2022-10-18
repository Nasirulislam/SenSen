import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Platform,
  Button,
  ActivityIndicator,
} from 'react-native';
import { Layout, Spinner } from '@ui-kitten/components';
import { Select, SelectItem } from '@ui-kitten/components';

import styles from './styles';
import { hp, wp } from '../../../Config/Helper/ResponsiveScreen';
import { SearchPart } from '../../../Store/Actions/PartSearchAction';
import { getDropdownValues } from '../../../Store/Actions/PartSearchAction';

import context from '../../../Store/Context';
// import { uniq, filter } from 'lodash';
// import Icon from 'react-native-dynamic-vector-icons';
// import { colors } from '../../../Config/Helper/styles';
import BottomBar from '../Common/BottomBar/BottomBar';

const renderOption = (title) => <SelectItem key={title} title={title} />;

const Index: () => React$Node = (props) => {
  let nav = props.navigation;
  const params = props.route.params;
  const global = useContext(context);
  var filterObj = {
    limit: 10,
    pageNumber: 1,
    params: params,
    Attributes: null,
    PartTerminology: null
  }

  const [makes, setMakes] = React.useState([]);
  const [selectedMake, setSelectedMake] = React.useState(0);
  const displayMake = makes[selectedMake.row];

  const [attributes, setAttributes] = React.useState([]);
  const [selectedAttribute, setSelectedAttribute] = React.useState(0);
  const displayAttribute = attributes[selectedAttribute.row];

  const [products, setProducts] = useState([]);
  const [refProducts, setRefProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadMoreFlag, setLoadMore] = useState(true);
  const [searchValues, setSearchValues] = useState({
    limit: 10,
    pageNumber: 1,
    params: params,
    Attributes: null,
    PartTerminology: null
  });
  const updateVar = (key, val) => {
    setSearchValues({
      ...searchValues,
      [key]: val
    })
  }
  useEffect(() => {
    getDropDownData('PartTerminology')
    getDropDownData('Attributes')
    getData('new')

  }, []);
  useEffect(() => {
    if (selectedMake) {
      getDropDownData('Attributes')
    }
  }, [selectedMake]);
  useEffect(() => {
    if (selectedAttribute) {
      updateVar('Attributes', attributes[selectedAttribute.row])
      getData('new')
    }
  }, [selectedAttribute]);
  useEffect(() => {
    if (selectedMake) {
      updateVar('PartTerminology', makes[selectedMake.row])
      getData('new')
    }
  }, [selectedMake]);

  const getDropDownData = (flag) => {
    var query = { felid: flag, input: {} }

    if (params.Year) {
      query['input']['Year'] = params.Year
    }
    if (params.Make) {
      query['input']['Make'] = params.Make
    }
    if (params.Model) {
      query['input']['Model'] = params.Model
    }
    if (displayMake) {
      query['input']['PartTerminology'] = displayMake
    }
    setLoading(true);
    getDropdownValues(query, global)
      .then(function (res) {
        if (res.data.felid == 'PartTerminology')
          setMakes(res.data.data);
        if (res.data.felid == 'Attributes')
          setAttributes(res.data.data);
        setLoading(false);
      })
  };


  const getData = (flag) => {
    setLoading(true);
    if (flag == 'new') {
      setSearchValues({
        ...searchValues,
        pageNumber: 1,
      });
      setLoadMore(true);
    }

    let tempObj = {
      limit: searchValues.limit,
      params: params,
    }
    if (flag == 'new') tempObj['pageNumber'] = 1
    else tempObj['pageNumber'] = searchValues.pageNumber
    if (selectedAttribute) tempObj['Attributes'] = attributes[selectedAttribute.row]
    if (selectedMake) tempObj['PartTerminology'] = makes[selectedMake.row]
    SearchPart(tempObj, global).then(function (res) {
      if (params.ref) {
        setRefProducts(res.data.get_reference_data)
      }

      if (res.data.get_data.length == 0) {
        setLoadMore(false);
      }

      setSearchValues({
        ...searchValues,
        pageNumber: searchValues.pageNumber + 1,
      });
      if (flag == 'new') {
        setProducts(res.data.get_data);
      } else {
        setProducts([...products, ...res.data.get_data]);
      }
      setLoading(false);
    });
  };


  const goto = (id) => {
    nav.navigate('ProductDetails', { id: id });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {loading ? (
        <Spinner status="primary" />
      ) : (
          <ScrollView
            style={{
              padding: wp(4),
              flex: 1,
              top: hp(Platform.OS === 'android' ? 2 : 0),
              marginBottom: hp(6),
            }}
            contentContainerStyle={{ bottom: hp(2) }}>
            <View style={styles.headerContainer}>
              <Image
                source={require('../../../Assets/images/SENSEN_Logo.png')}
                resizeMode="contain"
                style={styles.logo}
              />
              <View>
                <Text style={{ textAlign: 'center' }}>{'CONTACT US'}</Text>
                <Text style={{ textAlign: 'center' }}>{'877-395-0213'}</Text>
              </View>
            </View>

            {/* <TouchableOpacity style={{ marginTop: hp(5), borderWidth: 0.5 }}>
              <View style={{ backgroundColor: 'rgb(23, 115, 51)', padding: wp(1) }}>
                <Text style={styles.greenHeaderText}>{'Fitment For'}</Text>
              </View>
              <View style={styles.fordHeader}>
                <Text style={{ fontSize: wp(5) }}>
                  {params.Year}-{params.Make}-{params.Model}
                </Text>
                {
                  makes.length > 0 ?
                    <Select
                      style={styles.dropDownContainer}
                      disabled={loading}
                      placeholder={'-- Goto Purpose Part'}
                      value={displayMake}
                      selectedIndex={selectedMake}
                      onSelect={(index) => setSelectedMake(index)}>
                      {makes.map(renderOption)}
                    </Select>
                    : <Text style={styles.nomatch}>{"No matching part"}</Text>
                }
                {
                  attributes.length > 0 ?
                    <Select
                      style={styles.dropDownContainer}
                      disabled={loading}
                      placeholder={'--Attributes'}
                      value={displayAttribute}
                      selectedIndex={selectedAttribute}
                      onSelect={(index) => setSelectedAttribute(index)}>
                      {attributes.map(renderOption)}
                    </Select>
                    : <Text style={styles.nomatch}>{"No matching part"}</Text>
                }
              </View>
            </TouchableOpacity> */}
            {params.ref && refProducts.length > 0 ?
              <TouchableOpacity
                style={{ marginTop: hp(2), borderWidth: 0.5 }}>
                <View style={{ backgroundColor: 'rgb(23, 115, 51)', padding: wp(1) }}>
                  <Text style={styles.greenHeaderText}>{'Interchange Search Result'}​​​​​​​​</Text>
                </View>
                <View style={styles.interchangeTable}>
                  <View style={styles.interchangeCol1}>
                    <Text>Interchange Part/Brand</Text>
                  </View>
                  <View style={styles.interchangeCol2}>
                    <Text>Our Part Number</Text>
                  </View>
                </View>
                {
                  refProducts.map((part) => (
                    <TouchableOpacity
                      key={part._id}
                      onPress={() => {
                        goto(part.sparePart[0]._id);
                      }}>
                      <View

                        style={styles.interchangeTable}>
                        <View style={styles.interchangeCol1}>
                          <Text>{part["Interchange Part Number"]}</Text>
                          <Text>Brand:{part["Interchange Target"]}</Text>
                        </View>

                        <View style={styles.interchangeCol2}>
                          <View style={styles.interCol1}>
                            {part.images && part.images.length > 0 ?
                              <Image style={styles.interchangeImg} resizeMode='cover'
                                source={{ uri: part["images"][0]["URI"] }}
                              />
                              :
                              <Image style={styles.interchangeImg} resizeMode='cover' source={require('../../../Assets/images/Noimage.png')} />
                            }
                          </View>
                          <View style={styles.interCol2}>
                            <Text style={{ fontWeight: 'bold', marginVertical: 5 }} > {part["Item Identifier"]}</ Text>
                            <Text > {part.sparePart[0].PartTerminology}</ Text>
                            {/* <Text>Speedy strut complete stud by sensen</Text>
                            <Text>Quality meets affordability</Text> */}
                          </View >
                        </View >
                      </View>
                    </TouchableOpacity>
                  ))}
              </TouchableOpacity>
              : <></>}
            {/* {params.ref && refProducts &&
              refProducts.map((part) => (<TouchableOpacity 
                key={part.id}
                onPress={() => {
                  goto(part.sparePart[0]._id);
                }}
                style={{ marginTop: hp(2), borderWidth: 0.5 }}>
                <View style={styles.greenHeaderView}>
                  <Text style={styles.greenHeaderText}>
                    {part.sparePart[0].PartTerminology}
                  </Text>
                  <Text style={styles.greenHeaderText}>{'ref-'}-{part.sparePart[0].Position}</Text>
                </View>
                <View style={{ padding: wp(3) }}>
                  <View style={{ flexDirection: 'row' }}>
                    {part.images && part.images.length > 0 ? (
                      <Image
                        source={{
                          uri: part.images[0].URI,
                        }}
                        style={{ height: hp(14), width: wp(20) }}
                      />
                    ) : (
                        <Image
                          style={{ height: hp(14), width: wp(20) }}
                          source={require('../../../Assets/images/Noimage.png')}
                        />
                      )}
                    <View style={{ left: wp(4), width: wp(62) }}>
                      <Text
                        style={{ color: 'rgb(82, 150, 222)', fontWeight: '500' }}>
                        {part.sparePart[0]['Item Identifier']}
                        <Text style={{ color: 'black' }}>
                          -{part.sparePart[0].PartTerminology}
                        </Text>
                      </Text>
                      <Text>
                        {'Position: '}
                        <Text style={{ fontWeight: '700' }}>{part.sparePart[0].Position}</Text>
                      </Text>
                      <Text>
                        {'Submodel: '}
                        <Text style={{ fontWeight: '700' }}>{part.sparePart[0].Submodel}</Text>
                      </Text>
                      <Text style={styles.centerText}>
                        {'Eng Base: '}
                        <Text style={{ fontWeight: '700' }}>
                          {part.sparePart[0].EngineBase}
                        </Text>
                      </Text>
                      <Text style={styles.bottomCenterText}>
                        {'Device Type: '}
                        <Text style={{ fontWeight: '700' }}>
                          {part.sparePart[0].DriveType}
                        </Text>
                      </Text>
                      <Text>
                        {'Body Type: '}
                        <Text style={{ fontWeight: '700' }}>{part.sparePart[0].BodyType}</Text>
                      </Text>
                      <Text>
                        {'Brake ABS: '}
                        <Text style={{ fontWeight: '700' }}>{'4-Wheel ABS'}</Text>
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity style={styles.grayButton} onPress={() => {
                    goto(part.sparePart[0]._id);
                  }}>
                    <Text style={{ color: 'white' }}>{'Item Detail'}</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>))} */}
            {products &&
              products.map((part) => (
                <TouchableOpacity
                  key={part.id}
                  onPress={() => {
                    goto(part._id);
                  }}
                  style={{ marginTop: hp(2), borderWidth: 0.5 }}>
                  <View style={styles.greenHeaderView}>
                    <Text style={styles.greenHeaderText}>
                      {part.PartTerminology}
                    </Text>
                    <Text style={styles.greenHeaderText}>{part.Position}</Text>
                  </View>
                  <View style={{ padding: wp(3) }}>
                    <View style={{ flexDirection: 'row' }}>
                      {part.images && part.images.length > 0 ? (
                        <Image
                          source={{
                            uri: part.images[0].URI,
                          }}
                          resizeMode="contain"
                          style={{ height: hp(14), width: wp(30),backgroundColor:'white'}}
                        />
                        // <Image
                        //     style={{ height: hp(14), width: wp(30) }}
                        //     resizeMode="contain"
                        //     source={require('../../../Assets/images/Noimage.png')}
                        //   />
                      ) : (
                          <Image
                            style={{ height: hp(14), width: wp(30) }}
                            resizeMode="contain"
                            source={require('../../../Assets/images/Noimage.png')}
                          />
                        )}
                      <View style={{ left: wp(4), width: wp(50) }}>
                        <Text
                          style={{ color: 'rgb(82, 150, 222)', fontWeight: '500' }}>
                          {part['Item Identifier']}
                          <Text style={{ color: 'black' }}>
                            -{part.PartTerminology}
                          </Text>
                        </Text>
                        <Text>
                          {'Position: '}
                          <Text style={{ fontWeight: '700' }}>{part.Position}</Text>
                        </Text>
                        <Text>
                          {'Submodel: '}
                          <Text style={{ fontWeight: '700' }}>{part.Submodel}</Text>
                        </Text>
                        <Text >
                          {'Eng Base: '}
                          <Text style={{ fontWeight: '700' }}>
                            {part.EngineBase}
                          </Text>
                        </Text>
                        <Text style={styles.bottomCenterText}>
                          {'Device Type: '}
                          <Text style={{ fontWeight: '700' }}>
                            {part.DriveType}
                          </Text>
                        </Text>
                        <Text>
                          {'Body Type: '}
                          <Text style={{ fontWeight: '700' }}>{part.BodyType}</Text>
                        </Text>
                        <Text>
                          {'Brake ABS: '}
                          <Text style={{ fontWeight: '700' }}>{'4-Wheel ABS'}</Text>
                        </Text>
                      </View>
                    </View>
                    <TouchableOpacity style={styles.grayButton} onPress={() => {
                      goto(part._id);
                    }}>
                      <Text style={{ color: 'white' }}>{'Item Detail'}</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              ))}
            {loadMoreFlag ? (
              <TouchableOpacity style={{ padding: wp(2), marginBottom: hp(2) }}>
                {loading ? (
                  <ActivityIndicator color="white" style={{ marginLeft: 8 }} />
                ) : null}
                <Button
                  onPress={() => { getData('loadMore') }}
                  title="Load More"
                  color="#841584"
                  accessibilityLabel="Load more about this purple button"
                />
              </TouchableOpacity>
            ) : null}
          </ScrollView>
        )}
      <BottomBar {...props} />
    </SafeAreaView>
  );
};

export default Index;
