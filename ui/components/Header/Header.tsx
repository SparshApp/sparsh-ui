// import axios from 'axios';
// import User from '@/lib/sparsh-api/types';

import React, { useEffect, useState } from 'react';
import { getUsers } from '../../lib/sparsh-api/api';

const Header = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getUsers();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      <p>Here is some data fetched from the API:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Header;