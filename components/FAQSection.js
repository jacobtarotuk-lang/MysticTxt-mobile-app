import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const FAQSection = () => {
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleFAQ = (index) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((i) => i !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  const faqItems = [
    { question: 'What is MysticTxt?', answer: 'MysticTxt connects you with trusted advisors for spiritual readings.' },
    { question: 'How do I get started?', answer: 'Sign up for free and get 2 complimentary readings as a new client.' },
    { question: 'Is MysticTxt secure?', answer: 'Yes, all conversations are encrypted and kept private.' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FAQ</Text>
      {faqItems.map((item, index) => (
        <View key={index}>
          <TouchableOpacity onPress={() => toggleFAQ(index)}>
            <Text style={styles.question}>
              {expandedItems.includes(index) ? '− ' : '+ '} {item.question}
            </Text>
          </TouchableOpacity>
          {expandedItems.includes(index) && <Text style={styles.answer}>{item.answer}</Text>}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  question: {
    fontSize: 18,
    marginVertical: 5,
  },
  answer: {
    fontSize: 16,
    paddingHorizontal: 20,
    color: 'gray',
  },
});

export default FAQSection;
