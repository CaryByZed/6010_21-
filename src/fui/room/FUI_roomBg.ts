/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.room {

	export class FUI_roomBg extends fairygui.GComponent {

		public m_roombg:fairygui.GLoader;

		public static URL:string = "ui://2mffi74ewuvl2u";

		public static createInstance():FUI_roomBg {
			return <FUI_roomBg><any>(fairygui.UIPackage.createObject("room","roomBg"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_roombg = <fairygui.GLoader><any>(this.getChildAt(0));
		}
	}
}