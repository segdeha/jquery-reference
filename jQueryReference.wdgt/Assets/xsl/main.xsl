<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	
	<xsl:template match="/">
		<ul id="content">
			<xsl:apply-templates select="/docs/cat"/>
		</ul>
	</xsl:template>

	<xsl:template match="/docs/cat">
		<li>
			<xsl:value-of select="@value"/>
			<ul>
				<xsl:apply-templates select="subcat"/>
			</ul>
		</li>
	</xsl:template>
	
	<xsl:template match="subcat">
		<li>
			<xsl:value-of select="@value"/>
			<ul>
				<xsl:apply-templates select="function"/>
			</ul>
		</li>
	</xsl:template>

	<xsl:template match="function">
		<li>
			<h2>
				<span class="returns">Returns: <xsl:value-of select="@return"/></span>
				<xsl:value-of select="@name"/>(
				<xsl:for-each select="./params">
					<xsl:choose>
						<xsl:when test="./@optional='true'">
							<xsl:value-of select="@name"/>
						</xsl:when>
						<xsl:otherwise>
							<strong><xsl:value-of select="@name"/></strong>
						</xsl:otherwise>
					</xsl:choose>
				</xsl:for-each>
				)
			</h2>
			<p>
				<xsl:value-of select="./desc"/>
			</p>
		</li>
	</xsl:template>
	
</xsl:stylesheet>