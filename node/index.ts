export type Data = number | null;
 
export class Node {
  data: Data
  constructor(data: Data = null) {
      this.data = data;
  }
}