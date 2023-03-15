import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profile',
  description: 'Sparsh Srivastava',
};

export default function AboutPage() {
  return (
        <div>
            <h1>Profile</h1>
            <p>Sparsh Srivastava</p>
        </div>
    );
}