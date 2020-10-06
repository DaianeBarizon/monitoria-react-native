//conexão com o banco de dados
import Realm from 'realm';

import ClienteSchema from '../schemas/ClienteSchema';

//exporta uma funcao com um array com todos os schemas
export default function getRealm() {
  return Realm.open({
    schema: [ClienteSchema],
  });
}
