import AddTask from "@/components/AddTask";
import Button from "@/components/Button";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { FlashList } from "@shopify/flash-list";

const LIST_DATA: any = [
  {
    id: 0,
    title: "Writing Book",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quos!",
  },
  {
    id: 1,
    title: "Reading Book",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quos!",
  },
  {
    id: 2,
    title: "Watching Movie",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quos!",
  },
  {
    id: 3,
    title: "Coding App",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quos!",
  },
  {
    id: 4,
    title: "Cooking Food",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quos!",
  },
  {
    id: 5,
    title: "Playing Game",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quos!",
  },
  {
    id: 6,
    title: "Listening Music",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quos!",
  },
  {
    id: 7,
    title: "Exercising Body",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quos!",
  },
  {
    id: 8,
    title: "Studying English",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quos!",
  },
  {
    id: 9,
    title: "Learning New Language",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quos!",
  },
  {
    id: 10,
    title: "Reading Newspaper",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quos!",
  },
  {
    id: 11,
    title: "Watching TV",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quos!",
  },
  {
    id: 12,
    title: "Playing Basketball",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quos!",
  },
  {
    id: 13,
    title: "Cooking Pizza",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quos!",
  },
  {
    id: 14,
    title: "Listening Podcast",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quos!",
  },
  {
    id: 15,
    title: "Watching Movie in Theater",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quos!",
  },
  {
    id: 16,
    title: "Writing Letter",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quos!",
  },
  {
    id: 17,
    title: "Reading History",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quos!",
  },
  {
    id: 18,
    title: "Studying Math",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quos!",
  },
  {
    id: 19,
    title: "Learning New Programming",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quos!",
  },
  {
    id: 20,
    title: "Watching Live Stream",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quos!",
  },
  {
    id: 21,
    title: "Cooking Ramen",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quos!",
  },
  {
    id: 22,
    title: "Playing Football",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quos!",
  },
  {
    id: 23,
    title: "Listening Music in Car",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quos!",
  },
  {
    id: 24,
    title: "Watching Movie in Plane",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quos!",
  },
  {
    id: 25,
    title: "Writing Email",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quos!",
  },
  {
    id: 26,
    title: "Reading Science",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quos!",
  },
  {
    id: 27,
    title: "Studying Chemistry",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quos!",
  },
  {
    id: 28,
    title: "Learning New Language",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quos!",
  },
  {
    id: 29,
    title: "Watching Sports",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quos!",
  },
  {
    id: 30,
    title: "Cooking Steak",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quos!",
  },
];

const Card = ({
  id,
  title,
  description,
  onPress,
}: {
  id: number;
  title: string;
  description: string;
  onPress: (id: number) => void;
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardData}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <MaterialIcons
        name="delete-forever"
        color={"#050505"}
        size={22}
        onPress={() => onPress(id)}
      />
    </View>
  );
};

export default function AboutScreen() {
  const [listData, setListData] = useState(LIST_DATA);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const onHandleDelete = (id: number) => {
    const newList = listData.filter((item: any) => item.id !== id);
    setListData(newList);
  };

  return (
    <View style={styles.container}>
      <FlashList
        data={listData}
        renderItem={({ item }: any) => (
          <Card
            id={item.id}
            title={item.title}
            description={item.description}
            onPress={onHandleDelete}
          />
        )}
        estimatedItemSize={40}
        keyExtractor={(item: any) => item.id}
      />

      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => setIsModalVisible(true)}
        >
          <Text style={styles.buttonLabel}>Add</Text>
        </Pressable>
      </View>

      <AddTask
        isVisisble={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      >
        <></>
      </AddTask>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#25292e",
  },
  text: {
    fontSize: 15,
    fontWeight: "500",
    color: "#010101",
  },
  description: {
    color: "#010101",
    fontSize: 13,
  },
  card: {
    flex: 1 / 3,
    backgroundColor: "#efefef",
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 12,
    marginTop: 8,
    marginBottom: 8,
  },
  cardData: {
    flex: 1,
  },
  buttonContainer: {
    width: "100%",
    height: 68,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    backgroundColor: "#d5d5d5",
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonLabel: {
    color: "#010101",
    fontSize: 16,
    fontWeight: "600",
  },
});
