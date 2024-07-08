import { useDocsQuery } from '@/hooks/useFirestore';
import BasicTabs from '@/layout/Tabs';
import React from 'react';

const Tabs = () => {

  const [value, setValue] = React.useState(0);
  const { data: khachsan } = useDocsQuery('khachsan');
  const { data: vungMien } = useDocsQuery('vungmien');
  const { data: tinhthanh } = useDocsQuery('tinhthanh');
  const [sortedData, setSortedData] = React.useState([]);

  React.useEffect(() => {
    if (vungMien && tinhthanh && khachsan) {
      const newData = vungMien.map(vung => {
        const tinhthanhInVung = tinhthanh.filter(tt => tt.vungMien === vung.tenVungMien);
        const counts = tinhthanhInVung.map(tt => {
          const count = khachsan.filter(ks => ks.tinhThanh === tt.tenTinhThanh).length;
          return { ...tt, count };
        });

        // Filter out tinhthanh with 0 hotels
        const filteredCounts = counts.filter(tt => tt.count > 0);

        // Sort the filtered tinhthanh based on the number of hotels and slice the top 4
        const sortedCounts = filteredCounts.sort((a, b) => b.count - a.count).slice(0, 4);

        return { ...vung, tinhthanh: sortedCounts };
      }).filter(vung => vung.tinhthanh.length > 0); // Filter out vung with no hotels in any tinhthanh

      setSortedData(newData);
    }
  }, [vungMien, tinhthanh, khachsan]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <BasicTabs
        value={value}
        sortedData={sortedData}
        tinhthanh={tinhthanh}
        khachsan={khachsan}
        handleChange={handleChange}
      />
    </>
  );
};

export default Tabs;
