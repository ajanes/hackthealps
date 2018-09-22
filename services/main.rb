require "rexml/document"

include REXML

Position = Struct.new(:lon, :lat) #unmutable
Tag = Struct.new(:key, :value) #unmutable
Boundaries = Struct.new(:up_corner, :low_corner) #unmutable 

class Locator 

    ONE_METER = 90/10001965.729

    @data_file_url = "data/map.osm.xml"

    def initialize
        @parser = Parser.new("data/map.osm.xml")
    end

    def locate(lon, lat)
        user_position = Position.new(lon, lat)
        nodes = get_nearby_nodes(user_position)

    end 


    private 
    def get_nearby_nodes(user_position)
        offset_boundaries = compute_offset(user_position, 100)
        @parser.get_nodes(offset_boundaries)
    end

    def compute_offset(position, offset)
        half_offset = offset/2
        degrees_offset = half_offset*ONE_METER
        up_corner = Position.new(position.lon+degrees_offset, position.lat+degrees_offset)
        puts up_corner
        low_corner = Position.new(position.lon-degrees_offset, position.lat-degrees_offset)
        puts low_corner
        Boundaries.new(up_corner, low_corner)
    end 
 
    def select_nearest(nodes)
        #return the nearest of the list 
    end

    def get_info(node)
        #returns the tag of the node 
    end
end 

class Parser    
    def initialize(file_url)
        puts "loading"
        file = File.open(file_url)
        @doc = Document.new(file)
        puts "Ready!"
    end

    def get_nodes(boundaries)
        result =  run_query("osm/node[(@lat>='#{boundaries.low_corner.lat}' and @lat<='#{boundaries.up_corner.lat}') and (@lon>='#{boundaries.low_corner.lon}' and @lon<='#{boundaries.up_corner.lon}')]/@id")
        
        
        way_ids = []
        result.each() do |x| 
            res = run_query("string(osm/way/nd[@ref='#{x}']/parent::way/@id)")
            if res != [""] 
                puts way_ids
                way_ids << {res => x.to_s.split("'")}
            end
        end

        way_ids.each() |x| do 
            puts x.keys
            puts run_query("string(osm/way[@ref = '#{x.keys.[0].to_s}']/tag[@k='highway' or @tag='railway']/@v)")
        end

    end

    private 
    def run_query(xpath_query)
        XPath.match(@doc, xpath_query)
    end
end

 #a = Parser.new("data/map.osm.xml")
 
#a.run_query("osm/way/tag[@k='highway' and @v='motorway']/parent::way")

# class Node
#     attr_accessor :lon, :lat, :id
#     def initialize(id, lon, lat)
#       @lon = lon
#       @lat = lat
#       @id = id
#       @tags = []
#     end

#     def add_tag(tag)
#         @tags << tag
#     end
# end

# class Way 
#     attr_accessor :lon, :lat, :id, :tags

#     def initialize(id, lon, lat)
#       @lon = lon
#       @lat = lat
#       @id = id
#     end

#     def add_tag(tag)
#         @tags << tag
#      end
# end