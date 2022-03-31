import axios from '@/utils/axios'

const api = {
  home: () => axios.get('/api/home'),
  product: {
    list: (params) => axios.get('/api/product/list', params),
    detail: (id) => axios.get('/api/product/' + id),
    suggest: (params) => axios.get('/api/search/suggest', params),
    search: (params) => axios.get('/api/search', params),
    category: () => axios.get('/api/category/list')
  }
}
export default api
