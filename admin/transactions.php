<?php
add_thickbox();
$list->prepare_items();
?>
<style>
.ttablenav .alignleft:nth-of-type(2n) { clear: both; }
</style>
<div class="wrap">
	<h1 class="wp-heading-inline"><?php _e('Payments Transactions', 'simple-payment'); ?></h1>
	<?php if (user_can( get_current_user_id(), 'manage_options')) { ?><a href="/wp-admin/options-general.php?page=sp" cclass="page-title-action">Configure</a><?php } ?>
	<?php
	if ( isset( $_REQUEST['s'] ) && strlen( $_REQUEST['s'] ) ) {
		/* translators: %s: search keywords */
		printf( ' <span class="subtitle">' . __( 'Search results for &#8220;%s&#8221;' ) . '</span>', get_search_query() );
	}
	?>
	<hr class="wp-header-end">
	<?php $list->views(); ?>
	<form method="post">
		<?php
		$list->search_box(__('Search', 'simple-payment'), 's');
		$list->display(); ?>
	</form>
	<br class="clear">
</div>
