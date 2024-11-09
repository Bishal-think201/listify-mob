import { MaterialIcons } from "@expo/vector-icons";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  isVisisble: boolean;
  children: React.ReactNode;
  onClose: () => void;
};

export default function AddTask({ isVisisble, children, onClose }: Props) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisisble}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Add a new task</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color={"#fff"} size={22} />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: "25%",
    width: "100%",
    backgroundColor: "#25292e",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",
    top: "40%",
  },
  titleContainer: {
    height: "16%",
    backgroundColor: "#464c55",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#fff",
    fontSize: 16,
  },
});
