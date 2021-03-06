vistagrid.factory('PhotoService', ['$resource',
	function ($resource) {
		return {
			Uploads: $resource('/api/photo/:photo_id/', {photo_id: '@photo_id'}, {
				getAll: {
					method: 'GET',
					isArray: true
				},
				getOne: {
					method: 'GET',
					isArray: false
				},
				upload: {
					method: 'POST'
				},
				edit: {
					method: 'PUT'
				},
				delete: {
					method: 'DELETE'
				}
			}),
			Thumbnails: $resource('/api/preview/:preview_id/', {preview_id: '@preview_id'}, {
				getAll: {
					method: 'GET',
					isArray: true
				},
				getOne: {
					method: 'GET'
				},
				create: {
					method: 'POST'
				}
			}),
			PhotoEdit: $resource('/api/edit/:edit_id/', {edit_id: '@edit_id'}, {
				getAll: {
					method: 'GET',
					isArray: true
				},
				getOne: {
					method: 'GET',
					isArray: false
				}
			})
		}
}]);