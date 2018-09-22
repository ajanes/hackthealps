package hackthealps;

import java.util.ArrayList;

public class UserMonthly {
	
	int id;
	//	  private String name;
	int[][] money_saved = new int[12][];
	int[][] co2 = new int[12][0];
	ArrayList<UserMonthly> competitors;
	final int[] days_per_month = {31,28,31,30,31,30,31,31,30,31,30,31};
	
	
	public UserMonthly(int id) {
		
		super();
		this.id = id;
		for (int i = 0; i < days_per_month.length ; i++) {
			this.money_saved[i] = new int[days_per_month[i]];
			for (int j = 0; j < days_per_month[i] ; j ++) 
				this.money_saved[i][j] = Utils.getRandomNumberInRange(0, 100);
		}
		
		for (int i = 0; i < days_per_month.length ; i++) {
			this.co2[i] = new int[days_per_month[i]];
			for (int j = 0; j < days_per_month[i] ; j ++) 
				this.co2[i][j] = Utils.getRandomNumberInRange(0, 100);
		}
		
	}
	
	
	
}
