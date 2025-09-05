import React, { useState } from "react";
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

interface Publicacao {
  id: string;
  data: string;
  titulo: string;
  localizacao: string;
  imagem: string;
}

export default function PublicacoesScreen() {
  const [busca, setBusca] = useState("");
  const [dicas] = useState<Publicacao[]>([
    {
      id: "1",
      data: "06/01/25",
      titulo: "Viagem para Campos do Jordão",
      localizacao: "São Paulo, Brasil",
      imagem: "https://www.melhoresdestinos.com.br/wp-content/uploads/2022/11/teleferico-campos-jordao-capa.jpg",
    },
    {
      id: "2",
      data: "07/01/25",
      titulo: "Viagem para Gramado",
      localizacao: "Rio Grande do Sul, Brasil",
      imagem: "https://blog.123milhas.com/wp-content/uploads/2022/12/aniversario-de-gramado-quatro-curiosidades-sobre-a-cidade-conexao123.jpg",
    },
  ]);

  const dicasFiltradas = dicas.filter((d) =>
    d.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>DICAS DE VIAGENS</Text>

      {/* Campo de busca */}
      <TextInput
        style={styles.input}
        placeholder="Pesquisar Publicações"
        value={busca}
        onChangeText={setBusca}
      />

      {/* Lista de dicas */}
      <FlatList
        data={dicasFiltradas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.data}>{item.data}</Text>
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Text style={styles.localizacao}>{item.localizacao}</Text>
            <Image source={{ uri: item.imagem }} style={styles.imagem} />
          </View>
        )}
      />

      {/* Footer de navegação */}
      <View style={styles.footer}>
        <TouchableOpacity>
          <Ionicons name="airplane" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="home" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="briefcase" size={28} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
