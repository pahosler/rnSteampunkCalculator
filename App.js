/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  StatusBar,
} from 'react-native';
import {AdMobBanner} from 'react-native-admob';
import Backrgound from './assets/images/background-gears-numbers.jpg';
import Nixies from './assets/images/nixies.png';
import NumKeys from './assets/images/numkeys-all.png';
import FunKeys from './assets/images/funckeys-all.png';

const nixieOn = {
  0: 259,
  1: 221,
  2: 179,
  3: 139,
  4: 99,
  5: 59,
  6: 18,
  7: -21,
  8: -63,
  9: -102,
  10: -143,
  11: -183,
  12: -221,
  13: -257
};

// top/left coords for function keys off
const funKeyOff = {
  0: {top: -96,left: 2}, // +
  1: {top: -96,left: -97}, // -
  2: {top: -96,left: -195}, // X
  3: {top: -96,left: -294}, // /
  4: {top: -96,left: -392}, // =
  5: {top: -96,left: -488}, // Clr
  6: {top: -96,left: -587}, // M+
  7: {top: -96,left: -686}, // M-
  8: {top: -96,left: -784}, // MR
  9: {top: -96,left: -882} // MC
};

// top/left coords function keys on
const funKeyOn = {
  0: {top: -1,left: 1}, // +
  1: {top: -1,left: -98}, // -
  2: {top: -1,left: -197}, // X
  3: {top: -1,left: -295}, // /
  4: {top: -1,left: -392}, // =
  5: {top: -1,left: -490}, // Clr
  6: {top: -1,left: -589}, // M+
  7: {top: -1,left: -688}, // M-
  8: {top: -2,left: -787}, // MR
  9: {top: -2,left: -885} // MC
};

// top/left coords for number keys off
const numKeyOff = {
  0: {top: 0,left: 0},
  1: {top: 0,left: -98},
  2: {top: 0,left: -195},
  3: {top: 0,left: -294},
  4: {top: 0,left: -392},
  5: {top: 0,left: -490},
  6: {top: 0,left: -588},
  7: {top: 0,left: -686},
  8: {top: 0,left: -784},
  9: {top: 0,left: -883},
  10: {top: 0,left: -983} // the dot...
};

// top/left coords number keys on
const numKeyOn = {
  0: {top: -96,left: 0},
  1: {top: -96,left: -98},
  2: {top: -96,left: -195},
  3: {top: -96,left: -294},
  4: {top: -96,left: -392},
  5: {top: -96,left: -490},
  6: {top: -96,left: -588},
  7: {top: -96,left: -686},
  8: {top: -96,left: -784},
  9: {top: -96,left: -883},
  10: {top: -96,left: -983} // the dot...
};

// keyboard layout
const keyRowOff = {
  0: [funKeyOff[5]],
  1: [numKeyOff[7],numKeyOff[8],numKeyOff[9],funKeyOff[8],funKeyOff[9]],
  2: [numKeyOff[4],numKeyOff[5],numKeyOff[6],funKeyOff[6],funKeyOff[7]],
  3: [numKeyOff[1],numKeyOff[2],numKeyOff[3],funKeyOff[2],funKeyOff[3]],
  4: [numKeyOff[0],numKeyOff[10],funKeyOff[4],funKeyOff[0],funKeyOff[1]]
};
const keyRowOn = {
  0: [funKeyOn[5]],
  1: [numKeyOn[7],numKeyOn[8],numKeyOn[9],funKeyOn[8],funKeyOn[9]],
  2: [numKeyOn[4],numKeyOn[5],numKeyOn[6],funKeyOn[6],funKeyOn[7]],
  3: [numKeyOn[1],numKeyOn[2],numKeyOn[3],funKeyOn[2],funKeyOn[3]],
  4: [numKeyOn[0],numKeyOn[10],funKeyOn[4],funKeyOn[0],funKeyOn[1]]
}
const keyRowsOff = [keyRowOff[0],keyRowOff[1],keyRowOff[3],keyRowOff[4]];
const keyRowsOn = [keyRowOn[0],keyRowOn[1],keyRowOn[3],keyRowOn[4]];
const nixieOff = nixieOn[11];
const nixie = Array(10).fill(nixieOn[11]);

export default class App extends Component<{}> {

  constructor(props){
    super(props);
    this.state = {
      touch: false
    }
  }

  handleTouch() {
    this.setState({touch:!this.state.touch});
  }

  render() {

    const Nixie = nixie.map((nix,i) => (
      <View key={i} style={styles.nixies}>
        <Image source={Nixies} style={{marginTop: -1, left: nixieOn[Math.round(Math.random()*13)]}}/>
      </View>
    ));

    const Keyboard = keyRowsOff.map((mapKeys,i) => (
      <View key={i} style={styles.keys}>
        <Image />
      </View>
    ))

    return (
      <View style={styles.container}>
        <Image source={Backrgound} style={styles.backgroundImg}/>
      <View style={styles.displayNixies}>
        {Nixie}
      </View>
      <View style={styles.keyboard}>

        <View style={styles.keyRow}>
        <TouchableWithoutFeedback onPressIn={()=>this.handleTouch()} onPressOut={()=>this.handleTouch()}>
          <View style={[styles.keys,{left: 195}]}>
            <Image source={FunKeys} style={this.state.touch ? keyRowOn[0][0]: keyRowOff[0][0]} />
          </View>
        </TouchableWithoutFeedback>
        </View>

        <View style={styles.keyRow}>
          <View style={styles.keys}>
            <Image source={NumKeys} style={this.state.touch ? keyRowOn[1][0] : keyRowOff[1][0]} />
          </View>

          <View style={styles.keys}>
            <Image source={NumKeys} style={this.state.touch ? keyRowOn[1][1] : keyRowOff[1][1]} />
          </View>

          <View style={styles.keys}>
            <Image source={NumKeys} style={this.state.touch ? keyRowOn[1][2] : keyRowOff[1][2]} />
          </View>

          <View style={styles.keys}>
            <Image source={FunKeys} style={this.state.touch ? keyRowOn[1][3] : keyRowOff[1][3]} />
          </View>

          <View style={styles.keys}>
            <Image source={FunKeys} style={this.state.touch ? keyRowOn[1][4] : keyRowOff[1][4]} />
          </View>
        </View>
        <View style={styles.keyRow}>
          <View style={styles.keys}>
            <Image source={NumKeys} style={this.state.touch ? keyRowOn[2][0] : keyRowOff[2][0]} />
          </View>

          <View style={styles.keys}>
            <Image source={NumKeys} style={this.state.touch ? keyRowOn[2][1] : keyRowOff[2][1]} />
          </View>

          <View style={styles.keys}>
            <Image source={NumKeys} style={this.state.touch ? keyRowOn[2][2] : keyRowOff[2][2]} />
          </View>

          <View style={styles.keys}>
            <Image source={FunKeys} style={this.state.touch ? keyRowOn[2][3] : keyRowOff[2][3]} />
          </View>

          <View style={styles.keys}>
            <Image source={FunKeys} style={this.state.touch ? keyRowOn[2][4] : keyRowOff[2][4]} />
          </View>
        </View>
        <View style={styles.keyRow}>
          <View style={styles.keys}>
            <Image source={NumKeys} style={this.state.touch ? keyRowOn[3][0] : keyRowOff[3][0]} />
          </View>

          <View style={styles.keys}>
            <Image source={NumKeys} style={this.state.touch ? keyRowOn[3][1] : keyRowOff[3][1]} />
          </View>

          <View style={styles.keys}>
            <Image source={NumKeys} style={this.state.touch ? keyRowOn[3][2] : keyRowOff[3][2]} />
          </View>

          <View style={styles.keys}>
            <Image source={FunKeys} style={this.state.touch ? keyRowOn[3][3] : keyRowOff[3][3]} />
          </View>

          <View style={styles.keys}>
            <Image source={FunKeys} style={this.state.touch ? keyRowOn[3][4] : keyRowOff[3][4]} />
          </View>
        </View>
        <View style={styles.keyRow}>
          <View style={styles.keys}>
            <Image source={NumKeys} style={this.state.touch ? keyRowOn[4][0] : keyRowOff[4][0]} />
          </View>

          <View style={styles.keys}>
            <Image source={NumKeys} style={this.state.touch ? keyRowOn[4][1] : keyRowOff[4][1]} />
          </View>

          <View style={styles.keys}>
            <Image source={FunKeys} style={this.state.touch ? keyRowOn[4][2] : keyRowOff[4][2]} />
          </View>

          <View style={styles.keys}>
            <Image source={FunKeys} style={this.state.touch ? keyRowOn[4][3] : keyRowOff[4][3]} />
          </View>

          <View style={styles.keys}>
            <Image source={FunKeys} style={this.state.touch ? keyRowOn[4][4] : keyRowOff[4][4]} />
          </View>
        </View>
      </View>

        <AdMobBanner
          style={{top: -50}}
          bannerSize="banner"
          adUnitID="ca-app-pub-3940256099942544/6300978111"
          didFailToReceiveAdWithError={this.bannerError}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  backgroundImg: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  displayNixies: {
    flex: 0,
    position: "absolute",
    top: 100,
    flexDirection: "row",
  },
  nixies : {
    height: 100,
    width: 38,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderWidth: 0,
    borderColor: "transparent",
  },
  keyboard: {
    flex: 1,
    position: "absolute",
    top: 250,
  },
  keyRow: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
    padding: 5,
  },
  keys: {
    height: 96,
    width: 98,
    overflow: "hidden",
    borderWidth: 0,
    borderColor: "transparent",
    borderRadius: 50,

  },
});
