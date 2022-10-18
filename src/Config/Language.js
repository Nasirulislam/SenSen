import React from 'react';
import Languages from 'react-native-localization';
import ENG from './lang/en.json';
import SPN from './lang/sp.json';
import FRE from './lang/fr.json';

const lang = new Languages({
  "en":ENG,
  "sp":SPN,
  "fr":FRE
})

export default lang;
