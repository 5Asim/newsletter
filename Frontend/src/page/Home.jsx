import { Polygon2Icon } from "../components/polygon1"
import { Polygon3Icon } from "../components/polygon2"

export const Home = () =>
	{
		
		return(
			<div className="flex justify-center min-h-screen items-center bg-white">
			<div className="relative w-[600px] h-[7975px] flex flex-col items-start overflow-hidden">
			<div className="relative w-[600px] h-[7975px] flex flex-col items-start bg-[#dddfed] overflow-hidden">
				<div>
					<div className="absolute left-[120px] top-[828px] w-[370px] h-[80px] rounded-[30px] bg-[#394078]"><p className="text-center text-white text-3xl flex justify-center font-semibold my-5">KUCC BOARD MEMBER</p></div>
					<Polygon2Icon className="absolute left-[-110px] top-[-513px] w-[1138.3758px] h-[1157.11px] overflow-visible"/>
					<Polygon3Icon className="absolute left-[-507px] top-[-481px] w-[1114.9524px] h-[1142.5154px] overflow-visible"/>
					<div className="absolute left-[41px] top-[-33px] w-[109px] h-[197px] rounded-bl-[50px] rounded-br-[50px] bg-[#eceeff]"></div>
					<div className="absolute left-[196px] top-[77px] w-[357px] h-[67px] flex flex-col text-white text-[26px] font-semibold font-poppins">Introduction of KUCC</div>
					<div className="absolute left-[81px] top-[182px] w-[437px] h-[573px] rounded-t-[200px] rounded-b-[20px] bg-[#dddfed]" style={{ outline: '5px solid #394078', outlineOffset: '-5px' }}></div>
					
					<div className="absolute left-[153px] top-[559px] w-[292px] h-auto flex flex-col text-black text-[12px]">
						“Welcome to Kathmandu University Computer Club. Our heartfelt goal is to provide a platform for students to
						advance their technical and soft skills, grow their confidence, and bridge the gap between academia and
						industry. KUCC fulfills its mission by conducting several events, talk shows, hackathons, workshops, and much
						more bringing together everyone under the same roof.”{' '}
					</div>
					<div className="absolute left-[184px] top-[954px] w-[229px] h-[77px] rounded-[15px] bg-white"></div>
					<div className="absolute left-[236px] top-[517px] w-[199px] h-[42px] flex flex-col text-[15px] font-semibold text-[#394078]">Nirjal Bhurtel</div>
				</div>
				
			</div>
			</div>
			</div>
		)
	}