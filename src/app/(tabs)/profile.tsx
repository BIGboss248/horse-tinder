import { Button, View } from 'react-native';
import { useAuth } from '../../context/AuthContext';


export default function Profile() {
  const { logout } = useAuth();
  return (
    <View>
      <Button title='Logout' onPress={logout} />
    </View>
  )
}
