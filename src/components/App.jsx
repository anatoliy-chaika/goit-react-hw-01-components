import { Profile } from "./Profile/Profile";
import { Statistic } from "./Statistics/Statistic"
import { FriendList } from "./FriendList/FriendList"
import {TransactionHistory} from "./TransactionHistory/TransactionHistory"
import user from "./DataInfo/user"
import data from "./DataInfo/data"
import friends from "./DataInfo/friends"
import  transactions  from "./DataInfo/transactions"

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
      
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile item={user} />
      <Statistic title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
