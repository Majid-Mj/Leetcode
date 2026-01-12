public class Solution {
    public int AreaOfMaxDiagonal(int[][] dimensions) {
        double MaxDiagonal = 0;
        int maxArea = 0;
        for(int i=0; i<dimensions.Length; i++){
            int length = dimensions[i][0];
            int width = dimensions[i][1];

            double diagonal = Math.Sqrt((length * length) + (width * width));
            int Area = (length * width);

            if(diagonal > MaxDiagonal){
                MaxDiagonal = diagonal;
                maxArea = Area;
            }
            else if(MaxDiagonal == diagonal){
                 if(Area > maxArea){
                    maxArea = Area;
                 }
            }
        }
        return maxArea;
        
    }
}