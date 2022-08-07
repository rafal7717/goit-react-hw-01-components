import { Wrapper } from './Wrapper/Wrapper';

import { Profile } from './Profile/Profile';
import user from './Profile/user.json';

import { FriendList } from './FriendList/FriendList';
import friends from './FriendList/friends.json';

import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data.json';

import { TransactionHistory } from './Transactions/TransactionHistory';
import transactions from './Transactions/transactions.json';


export const App = () => {
  return (
    <Wrapper>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <FriendList friends={friends} />
      <Statistics title="Upload stats" stats={data} />
      <TransactionHistory items={transactions} />;
    </Wrapper>
  );
};
