import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, world!</Text>
      </View>
    );
  }
}

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

export default class Bananas extends Component {
  render() {
    let pic = { uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

import React, { Component } from 'react';
import { Text, View } from 'react-native';

class MiClasse extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>AVAVAVAVAVA -{this.props.name}- AVAVAVAVAVA</Text>
      </View>
    );
  }
}

export default class LotsOfMiClasses extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', top: 50}}>
        <MiClasse name='AAAAAAA' />
        <MiClasse name='BBBBBBB' />
        <MiClasse name='CCCCCCC' />
        <MiClasse name='DDDDDDD' />
      </View>
    );
  }
}

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

import React, { Component } from 'react';
import { ScrollView, Image, Text } from 'react-native';

export default class Contas extends Component {
  render() {
      return (
        <ScrollView>
          <Text style={{fontSize:96}}>AAAAA</Text>
          <Text style={{fontSize:96}}>BBBBB</Text>
          <Text style={{fontSize:96}}>CCCCC</Text>
          <Text style={{fontSize:96}}>DDDDD</Text>
          <Text style={{fontSize:96}}>EEEEE</Text>
          <Text style={{fontSize:96}}>FFFFF</Text>
          <Text style={{fontSize:96}}>GGGGG</Text>
        </ScrollView>
    );
  }
}


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View } from 'react-native';

export default class SectionListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => SectionListBasics);

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/






















/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
import React, { Component } from 'react';
import axios from 'axios';
import { Text, View } from 'react-native';
// import { BrowserRouter as Router, Route } from 'react-router-dom'

// import Navigation from './components/Navigation'
// import Lista from './components/Lista'

export default class HelloWorldApp extends Component {

  state = {
    valor: []
  }
  async componentDidMount() {
    try {
      const res = await axios.get('http://192.168.1.102:4000/api/val');
      // console.warn(res);
      this.setState({valor: res.data})
      // console.warn(this.state.valor);
      // console.warn(this.state.valor.map(valor => <Text key={valor._id} >{valor.tipo}</Text> ))
      
    } catch (e) {
      console.warn(e);
    }
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>ASASAS</Text>
        {this.state.valor.map(valor => <Text key={valor._id} >{valor.tipo}</Text> )}
      </View>
    );
  }
}


































































































