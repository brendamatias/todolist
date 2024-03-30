import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  header: {
    paddingVertical: 70,
    alignItems: 'center',
    justifyContent: 'center',

  },
  content: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    padding: 24,
  },
  form: {
    flexDirection: 'row',
    gap: 4,
    marginBottom: 32,
    marginTop: -51
  },
  input: {
    padding: 16,
    fontSize: 16,
    color: '#F2F2F2',
    backgroundColor: '#262626',
    borderRadius: 6,
    flex: 1,
  },
  button: {
    backgroundColor: '#1E6F9F',
    height: 52,
    width: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6
  },
  countContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  countItem: {
    flexDirection: 'row',
    gap: 8
  },
  createdText: {
    color: '#4EA8DE',
    fontSize: 14,
    fontWeight: 'bold',
  },
  finishedText: {
    color: '#8284FA',
    fontSize: 14,
    fontWeight: 'bold',
  },
  count: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 25,
    height: 19,
    borderRadius: 999,
    backgroundColor: '#333333',
    marginBottom: 20,
  },
  countText: {
    color: '#D9D9D9',
    fontWeight: 'bold',
    fontSize: 12
  },
  listEmpty: {
    borderTopColor: '#333',
    borderTopWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listEmptyTitle: {
    color: '#808080',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16,
  },
  listEmptySubtitle: {
    color: '#808080',
    fontSize: 14,
    textAlign: 'center'
  }
});
