bindCss est un plugin jQuery permettant de créer des pseudos événements sur les propriétés CSS d'un élément. Par exemple lorsqu'une <div/> change de hauteur, de largeur, de couleur, etc...

##Utilisation :##
```html
	<script type="text/javascript" src="http://code.jquery.com/jquery-1.7.2.min.js"></script>
	<script type="text/javascript" src="https://raw.github.com/johnstyle/jQuery-bindCss/master/jquery.bindCss.js"></script>
	<script type="text/javascript">
		jQuery(function(){
			jQuery('#myDiv').bindCss('color', function(){
				alert('La div a changé de couleur !');
			});
		});
	</script>
	<div id="myDiv"></div>
```