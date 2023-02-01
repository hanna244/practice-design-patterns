import axios from '.'

export default class SampleProdectsService {
  static async categories() {
    return await axios.get('products/categories')
  }
}
