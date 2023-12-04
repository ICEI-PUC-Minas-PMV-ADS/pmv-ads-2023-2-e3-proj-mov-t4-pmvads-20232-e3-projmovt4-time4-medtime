import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Button } from 'react-native';
import { getClienteData, getPedidosData } from '../servicos/DbServices';

const AreaLogada = ({ navigation }) => {
  const [clienteData, setClienteData] = useState(null);
  const [pedidosData, setPedidosData] = useState([]);

  useEffect(() => {
    // Substitua '1' pelo ID do cliente logado
    const clienteId = 1;

    const fetchClienteData = async () => {
      try {
        const data = await getClienteData(clienteId);
        setClienteData(data);
      } catch (error) {
        console.error('Erro ao buscar dados do cliente:', error);
      }
    };

    const fetchPedidosData = async () => {
      try {
        const data = await getPedidosData(clienteId);
        setPedidosData(data);
      } catch (error) {
        console.error('Erro ao buscar dados dos pedidos:', error);
      }
    };

    fetchClienteData();
    fetchPedidosData();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Área Logada</Text>
        {clienteData && (
          <View>
            <Text>Dados do Cliente:</Text>
            {/* Renderize os dados do cliente conforme necessário */}
          </View>
        )}
        {pedidosData.length > 0 && (
          <View>
            <Text>Dados dos Pedidos:</Text>
            {/* Renderize os dados dos pedidos conforme necessário */}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default AreaLogada;
