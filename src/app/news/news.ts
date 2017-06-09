/**
 * Created by Haimov on 08/06/2017.
 */
export class News {
  _id?: string;
  id: number;
  rate: number;
  reporter: number[];
  subTitlte: string;
  title: string;
  url: string;

    public static sortByRating (unsortedNews: News[]) {
    return unsortedNews.sort((un1,un2) => {
      if (un1.rate < un2.rate) {
        return 1;
      }
      if (un1.rate > un2.rate) {
        return -1;
      }
      return 0;
    });
  }
}
