import React from 'react';
import { ScrollView, View, Text, StyleSheet, Button } from 'react-native';

import Header from './Header';


const MedPill = ({ navigation }) => {
  const navigateToSignup = () => {
    navigation.navigate('Signup'); 
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView>
        <Text style={styles.title}>Conheça nossa MedPill</Text>
        <Text style={styles.paragraph}>

A MedPill é uma plataforma inovadora projetada para simplificar e aprimorar o processo de organização, gerenciamento e acompanhamento de regimes de tratamento medicamentoso. Desenvolvida com a visão de otimizar a experiência tanto para pacientes quanto para profissionais de saúde, a MedPill oferece uma solução abrangente e eficiente.
 {'\n\n'} 
 
Cadastro Facilitado: A MedPill proporciona um processo de cadastro intuitivo e acessível a todos os envolvidos no cuidado do paciente. Farmácias, cuidadores e pacientes podem se cadastrar facilmente no site, proporcionando uma entrada conveniente na plataforma.
 {'\n\n'} 

Acesso Personalizado: Após o cadastro, cada tipo de usuário recebe um acesso personalizado à plataforma. Isso significa que farmácias, cuidadores e pacientes têm interfaces distintas, adaptadas às suas necessidades específicas.
 {'\n\n'} 

Organização Conforme Receita Médica: Um dos diferenciais da MedPill é a capacidade de organizar automaticamente os medicamentos de acordo com a receita médica do paciente. Isso simplifica significativamente o processo, garantindo que os medicamentos corretos estejam prontos para uso, evitando confusões e possíveis erros.
 {'\n\n'} 

Facilidade para Farmácias: As farmácias parceiras têm a vantagem de receber pedidos de medicamentos organizados de acordo com as prescrições médicas, economizando tempo e aumentando a eficiência na preparação de pedidos. Isso resulta em uma experiência mais eficaz para os profissionais de farmácia e, por fim, beneficia os pacientes.
 {'\n\n'} 

Suporte a Cuidadores: Os cuidadores, que desempenham um papel crucial no processo de tratamento, podem acessar facilmente as informações sobre a medicação do paciente por meio da plataforma. Isso permite um acompanhamento mais eficaz, garantindo que as doses sejam administradas corretamente e proporcionando uma comunicação mais transparente com os profissionais de saúde.
 {'\n\n'} 

Autonomia para Pacientes: Pacientes têm a comodidade de acessar informações sobre seus medicamentos e regimes de tratamento a qualquer momento. Além disso, a MedPill promove a autonomia do paciente, permitindo que ele participe ativamente do gerenciamento de sua saúde.
 {'\n\n'} 

Ferramentas de Acompanhamento: A plataforma também oferece ferramentas de acompanhamento que possibilitam a monitorização do cumprimento do tratamento, o que é fundamental para o sucesso terapêutico. Alertas e lembretes automáticos ajudam a garantir que as doses sejam administradas no horário correto.
 {'\n\n'} 

Conexão entre Profissionais de Saúde: A MedPill facilita a colaboração entre farmácias, cuidadores e profissionais de saúde. Isso cria uma rede integrada que promove uma abordagem colaborativa para garantir o bem-estar dos pacientes.
 {'\n\n'} 

Em resumo, a MedPill se destaca ao fornecer uma solução abrangente que une eficiência, organização e colaboração. Ao simplificar o processo de gerenciamento de medicamentos, a plataforma visa melhorar a qualidade de vida dos pacientes, promovendo uma abordagem mais integrada e centrada no paciente no campo da saúde.
   
        </Text>
        <Button
          title="Monte seu MedPill"
          onPress={navigateToSignup}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 12,
    lineHeight: 24,
    textAlign: 'justify',
    paddingHorizontal: 15,
  },
});


export default MedPill;