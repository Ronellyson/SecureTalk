/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import AvatarSwipeOption from '../avatarSwipeOption';
import {AvatarData} from '../../types/AvatarData';

interface AvatarSwipeOptionListProps {
  onSelectAvatar: (avatarId: string) => void;
}

const data = [
  { id: '1', iconName: 'account-circle', isCenter: false, color: '#FF5733' }, // Perfil
  { id: '2', iconName: 'person', isCenter: false, color: '#FFC300' }, // Pessoa
  { id: '3', iconName: 'android', isCenter: false, color: '#3498DB' }, // Robô
  { id: '4', iconName: 'pets', isCenter: false, color: '#27AE60' }, // Animal
  { id: '5', iconName: 'emoji-people', isCenter: false, color: '#E74C3C' }, // Emoji
  { id: '6', iconName: 'videogame-asset', isCenter: false, color: '#9B59B6' }, // Jogos
  { id: '7', iconName: 'favorite', isCenter: false, color: '#F39C12' }, // Coração
  { id: '8', iconName: 'school', isCenter: false, color: '#C0392B' }, // Estudo
  { id: '9', iconName: 'camera', isCenter: false, color: '#16A085' }, // Fotografia
  { id: '10', iconName: 'music-note', isCenter: false, color: '#2980B9' }, // Música
  { id: '11', iconName: 'work', isCenter: false, color: '#27AE60' }, // Trabalho
  { id: '12', iconName: 'local-cafe', isCenter: false, color: '#8E44AD' }, // Café
  { id: '13', iconName: 'fitness-center', isCenter: false, color: '#2C3E50' }, // Exercício
  { id: '14', iconName: 'rowing', isCenter: false, color: '#D35400' }, // Esportes
  { id: '15', iconName: 'beach-access', isCenter: false, color: '#7F8C8D' }, // Praia
  { id: '16', iconName: 'local-mall', isCenter: false, color: '#E74C3C' }, // Compras
  { id: '17', iconName: 'group', isCenter: false, color: '#3498DB' }, // Grupo
  { id: '18', iconName: 'local-restaurant', isCenter: false, color: '#9B59B6' }, // Comida
  { id: '19', iconName: 'book', isCenter: false, color: '#27AE60' }, // Leitura
  { id: '20', iconName: 'flight', isCenter: false, color: '#F39C12' }, // Viagem
  { id: '21', iconName: 'theaters', isCenter: false, color: '#C0392B' }, // Cinema
  { id: '22', iconName: 'spa', isCenter: false, color: '#16A085' }, // Relaxamento
  { id: '23', iconName: 'brush', isCenter: false, color: '#2980B9' }, // Arte
  { id: '24', iconName: 'cake', isCenter: false, color: '#2C3E50' }, // Bolo
  { id: '25', iconName: 'local-pizza', isCenter: false, color: '#D35400' }, // Pizza
  { id: '26', iconName: 'wc', isCenter: false, color: '#7F8C8D' }, // Banheiro
  { id: '27', iconName: 'local-grocery-store', isCenter: false, color: '#E74C3C' }, // Mercado
  { id: '28', iconName: 'bug-report', isCenter: false, color: '#3498DB' }, // Inseto
  { id: '29', iconName: 'child-care', isCenter: false, color: '#9B59B6' }, // Criança
  { id: '30', iconName: 'theater-comedy', isCenter: false, color: '#27AE60' }, // Entretenimento
];

function AvatarSwipeOptionList({ onSelectAvatar }: AvatarSwipeOptionListProps): JSX.Element {
    const [selectedId, setSelectedId] = useState<string | null>(null);
  
    const handleAvatarSelect = (avatarId: string) => {
      setSelectedId(avatarId);
      onSelectAvatar(avatarId);
    };
  
    const renderItem = ({ item }: { item: AvatarData }) => (
      <AvatarSwipeOption
        data={item}
        isSelected={item.id === selectedId}
        onPress={() => {
            handleAvatarSelect(item.id);
        }}
      />
    );
  
    return (
      <View style={styles.background}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          horizontal
          contentContainerStyle={styles.listContainer}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    background: {
      backgroundColor: '#191970',
      justifyContent: 'center',
      alignItems: 'center',
      maxHeight: 84,
    },
    listContainer: {
      paddingHorizontal: 20,
    },
});
  
export default AvatarSwipeOptionList;