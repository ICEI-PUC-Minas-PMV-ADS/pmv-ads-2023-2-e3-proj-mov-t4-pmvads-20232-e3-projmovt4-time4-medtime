import { createStackNavigator } from 'react-navigation-stack';
import QuemSomos from './QuemSomos'; 
import MedPill from './MedPill';
import Novidades from './Novidades';
import Contatos from './Contatos';
import AreaLogada from './AreaLogada';
import Signin from './Signin';
import Signup from './Signup';
import Receita from './Receita';


const AppNavigator = createStackNavigator({
  QuemSomos: QuemSomos,
  MedPill: MedPill,
  Novidades: Novidades,
  Contatos: Contatos,
  AreaLogada: AreaLogada,
  Signin: Signin,
  Signup: Signup,
  Receita: Receita,

});

export default AppNavigator;
