package hackthealps;

import java.util.ArrayList;

public class UserWeekly {
	int id;
	//	  private String name;
	int[] money_saved;
	int[] co2;
	ArrayList<UserWeekly> competitors;
	
	
	
	public UserWeekly(int id) {
		super();
		this.id = id;
		this.money_saved = Utils.randomIntArray(7);
		this.co2 = Utils.randomIntArray(7);
		
	}
	
	
	

}
