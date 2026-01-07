public class Solution {
    public int DifferenceOfSums(int n, int m) {
        int SumNonDiv = 0;
        int SumDiv = 0;

        for(int i=0; i<=n; i++){
            if(i % m == 0)
            {
                SumDiv += i;
            }
            else{
                SumNonDiv += i;
            }
        }

        return SumNonDiv-SumDiv;
    }
}