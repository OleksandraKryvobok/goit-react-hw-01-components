import user from '../data/user.json';
import stats from '../data/stats.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { GlobalStyle } from './GlobalStyle';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './Friends/FriendList';
import { TransactionHistory } from './Transactions/TransactionHistory';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Profile user={user} />
      <Statistics title="Upload stats" stats={stats}/>
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions}/>
    </Layout>
  );
};

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
