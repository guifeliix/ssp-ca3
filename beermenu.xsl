<?xml version="1.0" encoding="UTF-8"?>
<xsl:transform xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
	<xsl:template match="/">
	
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		<link rel="stylesheet" href="/css/styles.css"/>
		<script type="text/javascript" src="/js/scripts.js">x</script>
		
	
		<table id="menuTable" border="1" class="indent">
			<thead>
				<tr>
					<th>Select</th>
					<th>Item</th>
					<th>Price</th>
				</tr>
				
			</thead>
			<tbody>
				<xsl:for-each select="//category">
					<tr>
						<td colspan="3">
							<xsl:value-of select="@name" />
						</td>
					</tr>
					<xsl:for-each select="item">
						<tr id="{position()}">
							<xsl:attribute name="zero">
								<xsl:value-of select="boolean(@zero)" />
							</xsl:attribute>
							<td align="center">
								<input name="item0" type="checkbox" />
							</td>
							<td>
								<xsl:value-of select="listing" />
							</td>
							<td align="right">
								<xsl:value-of select="price" />
							</td>
						</tr>
					</xsl:for-each>
				</xsl:for-each>
			</tbody>
		</table>
		<!-- <form class="indent">
			<p><input type="button" name="btnCalcBill" value="Calculate Bill" id="calcBill"/>
			Total:
			<input type="text" name="txtBillAmt"/><input type="checkbox" name="cbOpts" value="isZero" id="showZero"/><label for="showDecaf">HightLight Zero Alcohol Beers</label>
			</p> -->
	</xsl:template>
</xsl:transform>