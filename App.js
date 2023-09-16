import { StyleSheet, View } from 'react-native';
import "./src/components/quadrado/index";
import CriaQuadrado from "./src/components/quadrado/index";

export default function App() {
  return (
    <View style={styles.container}>
      <CriaQuadrado />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
