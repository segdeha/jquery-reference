<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	
	<xsl:template match="/">
		<xsl:apply-templates/> 
	</xsl:template>
	
	<ul id="navigation">
		<li>
			<a href="#"><xsl:value-of select="@value"/></a>
			<ul>
				<xsl:apply-templates select="subcat"/>
			</ul>
		</li>
	</ul>
	
	<xsl:template match="subcat">
		<li><xsl:value-of select="@value"/></li>
	</xsl:template>
	
</xsl:stylesheet>