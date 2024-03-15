import {View, ScrollView, SafeAreaView, Text, TextInput} from 'react-native';

import { useColorScheme } from '@/components/useColorScheme';


import { useRouter, Stack} from 'expo-router';
import {COLORS, icons, images, SIZES} from '../constants'

import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components'

export default function Page() {
  return (
    <SafeAreaView style={{flex:1, backgroundColor: COLORS.lightWhite}}>
        
        <Text>INDEX LANDING!</Text>
        <Stack.Screen
        options = {{
          headerStyle: {backgroundColor: COLORS.lightWhite},
          headerShadowVisible: false,
          headerLeft: () => (
            < ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            < ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerTitle:""

        }} />
        <ScrollView showsVerticalScrollIndicator={false}>
            <View
                style={{
                    flex: 1,
                    padding: SIZES.medium,
                }}
            >

            
                <Welcome />
                <Popularjobs />
                <Nearbyjobs />
               
            </View>


        </ScrollView>
          
    </SafeAreaView>
  )
}
