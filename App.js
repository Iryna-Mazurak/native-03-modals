import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  Modal,
  ScrollView,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: 'Card 1',
      description: 'Description for Card 1',
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'Description for Card 2',
    },
    {
      id: 3,
      title: 'Card 3',
      description: 'Description for Card 3',
    },
    {
      id: 4,
      title: 'Card 4',
      description: 'Description for Card 4',
    },
  ]);

  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (card) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <View style={styles.container}>
      {cards.map((card) => (
        <Pressable
          key={card.id}
          style={styles.card}
          onPress={() => openModal(card)}
        >
          <Text style={styles.cardTitle}>{card.title}</Text>
        </Pressable>
      ))}

      <Modal
        visible={selectedCard !== null}
        transparent
        animationType="fade"
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modal}>
            <ScrollView>
              {selectedCard && (
                <>
                  <Text style={styles.modalTitle}>
                    {selectedCard.title}
                  </Text>

                  <Text style={styles.description}>
                    {selectedCard.description}
                  </Text>

                  <Pressable
                    style={styles.closeButton}
                    onPress={closeModal}
                  >
                    <Text>Close</Text>
                  </Pressable>
                </>
              )}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  card: {
    height: 80,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },

  cardTitle: {
    fontSize: 20,
  },

  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  modal: {
    width: '85%',
    maxHeight: '70%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 24,
  },

  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },

  description: {
    fontSize: 18,
    marginBottom: 24,
  },

  closeButton: {
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
});

export default App;
