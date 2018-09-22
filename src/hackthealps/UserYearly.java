package hackthealps;

import java.util.ArrayList;

public class UserYearly {
	
	int id;
	//	  private String name;
	int[] money_saved = new int[12];
	int[] co2 = new int[12];
	ArrayList<UserYearly> competitors;
	
	
	public UserYearly(int id) {
		
		super();
		this.id = id;
		this.money_saved = Utils.randomIntArray(12);
		this.co2 = Utils.randomIntArray(12);
		
	}

}
