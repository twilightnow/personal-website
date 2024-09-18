// src/api/useFetchData.js
import { useQuery } from 'react-query';
import axios from 'axios';

// 改进: 允许传入自定义URL和配置选项，并处理错误
const fetchData = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    throw new Error(`Error fetching data from ${url}: ${error.message}`);
  }
};

/**
 * 使用示例：
 * const { data, error, isLoading } = useFetchData('https://api.example.com/data', {
 *   retry: 2,
 *   refetchOnWindowFocus: true
 * });
 */
// 改进: 允许传入URL和React Query的配置选项
export const useFetchData = (url, config = {}) => {
  return useQuery(['fetchData', url], () => fetchData(url), {
    retry: 1,  // 失败时重试的次数
    refetchOnWindowFocus: false,  // 当窗口重新聚焦时，是否重新获取数据
    ...config  // 用户自定义的配置会覆盖默认配置
  });
};

