<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:template match="/">
		<xsl:apply-templates/> 
	</xsl:template>
	
	<xsl:template match="cat">
		<div id="content">
			<xsl:for-each select="subcat">
				<div class="sub">
					<ul>
						<xsl:apply-templates select="function"/>
					</ul>
				</div>
			</xsl:for-each>
		</div>
	</xsl:template>
	
	<xsl:template match="function">
		<li><xsl:value-of select="@value"/></li>
	</xsl:template>

</xsl:stylesheet>