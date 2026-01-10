public class Solution {
    public int CountNegatives(int[][] grid) {
        int count=0;
        for(int row=0; row<grid.Length; row++){
            for(int column=0; column<grid[row].Length; column++ ){
                if(grid[row][column] < 0) count++;
            }
        }
        return count;
    }
}