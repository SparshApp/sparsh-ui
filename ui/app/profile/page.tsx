import Header from "components/Header";
// import type { Metadata } from 'next';
import Profile from "views/Profile";

// export const metadata: Metadata = {
//   title: 'Profile',
//   description: 'Sparsh Srivastava',
// };

export default function ProfilePage() {
  return (
    <div>
      <Header />
      <Profile />
    </div>
  );
}
