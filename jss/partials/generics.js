const { fonts, layout, colors } = require("../variables");
const headersProps = {
	margin: layout.itemsMargin,
	color: colors.secondary,
	fontFamily: fonts.secondary,
}
const generics = [
	{
		selector: "h1",
		fontSize: fonts.sizes.h1,
		...headersProps,
		transition: "all .1s ease-out",
		childrens: [
			{
				selector: ":hover",
				letterSpacing: `.5rem`,
				cursor: "default"
			}
		]
	},
	{
		selector: "h2",
		fontSize: fonts.sizes.h2,
		...headersProps
	},
	{
		selector: "h3",
		fontSize: fonts.sizes.h3,
		...headersProps
	},
	{
		selector: "::-webkit-scrollbar",
		width: ".25rem",
		height: ".25rem",
	},
	{
		selector: "::-webkit-scrollbar-thumb",
		background: colors.tertiary
	},
	{
		selector: "p",
		fontSize: fonts.sizes.p,
		fontFamily: fonts.secondary,
		margin: layout.itemsMargin
	},
	{
		selector: "pre",
		background: colors.dark,
		color: "white",
		margin: 0,
		padding: layout.itemsPadding,
		borderRadius: layout.borderRadius,
		fontFamily: fonts.main,
		childrens: [
			{
				selector: "b",
				color: colors.secondary
			},
			{
				selector: "code",
				fontFamily: fonts.main
			}
		]
	},
	{
		selector: "ul",
		padding: 0,
		margin: 0,
		childrens: [
			{
			selector: "li",
			padding: 0,
			margin: 0
			}
		]
	}
];

module.exports = {
	generics
};
