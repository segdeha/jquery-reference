<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	
	<xsl:template match="/">
		<ul id="content">
			<xsl:apply-templates select="/docs/cat"/>
		</ul>
	</xsl:template>

	<xsl:template match="/docs/cat">
		<li>
			<a><xsl:value-of select="@value"/></a>
			<ul>
				<xsl:apply-templates select="subcat"/>
			</ul>
		</li>
	</xsl:template>
	
	<xsl:template match="subcat">
		<li>
			<a><xsl:value-of select="@value"/></a>
			<ul>
				<xsl:apply-templates select="function"/>
			</ul>
		</li>
	</xsl:template>

	<xsl:template match="function">
		<li>
			<p>
				Name: <xsl:value-of select="@name"/>
				Returns: <xsl:value-of select="@return"/><br/>
			</p>
		</li>
	</xsl:template>
	
</xsl:stylesheet>