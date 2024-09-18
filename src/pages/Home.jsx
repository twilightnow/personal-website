// import { useFetchData } from '../api/useFetchData';
import useStore from '../hooks/useStore';
import { useTranslation } from 'react-i18next';

const Home = () => {
  // const { data, error, isLoading } = useFetchData();
  const { count, increment } = useStore();
  const { t } = useTranslation();

  // 处理加载状态
  // if (isLoading) return <div className="text-center text-gray-500">{t('Loading...')}</div>;

  // 处理错误状态
  // if (error) return <div className="text-center text-red-500">{t('Error fetching data')}</div>;

  // 处理没有数据的情况
  // if (!data || data.length === 0) return <div className="text-center">{t('No data available')}</div>;

  return (
    <div className="p-4">
      <div>
        <h1>{t('Welcome')}</h1>
      </div>
      <div className="p-4 text-center">
        <h1 className="text-4xl font-bold">Welcome to My Personal Website</h1>
        <p className="mt-4 text-lg">This is the homepage of my website. Feel free to explore!</p>
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded">
          Click Me
        </button>
        {/* <img
          className="mt-6"
          src="https://via.placeholder.com/300"
          alt="Placeholder"
        /> */}
      </div>
      <h1 className="text-2xl font-bold">{t('Welcome')}</h1> {/* 保证一致性 */}
      <button onClick={increment} className="mt-2 bg-blue-500 text-white p-2 rounded">
        {t('Count')}: {count}
      </button>
      {/* <ul className="mt-4">
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Home;
