import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
    borderRadius: 8,
    borderColor: '#333333',
    borderWidth: 1,
    paddingVertical: 12,
    paddingRight: 8,
    paddingLeft: 12,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8
  },
  content: {
   fontSize: 14,
   color: '#F2F2F2',
   flex: 1
  },
  finished: {
    color: '#808080',
    textDecorationLine: 'line-through'
  },
  button: {
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
