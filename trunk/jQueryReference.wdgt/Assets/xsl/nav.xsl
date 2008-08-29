<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html"/>
	<xsl:preserve-space elements="html"/>
	
	<xsl:template match="/">
		<ul id="navigation">
			<xsl:apply-templates select="/docs/cat"/>
		</ul>
	</xsl:template>

	<xsl:template match="/docs/cat">
		<li class="cat">
			<xsl:value-of select="@value"/>
			<ul>
				<xsl:apply-templates select="subcat"/>
			</ul>
		</li>
	</xsl:template>
	
	<xsl:template match="subcat">
		<li class="subcat"><xsl:value-of select="@value"/></li>
	</xsl:template>
	
</xsl:stylesheet>