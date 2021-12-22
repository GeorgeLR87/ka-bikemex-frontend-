// ./src/components/User/Profile.js

import React from 'react'

export default function Profile() {
	return (
		<div>
			<>
				<div class="bg-white shadow overflow-hidden sm:rounded-lg">
					<div class="px-4 py-5 sm:px-6">
						<h3 class="text-lg leading-6 font-medium text-gray-900">
							Perfil
						</h3>						
					</div>
					<div class="border-t border-gray-200 px-4 py-5 sm:px-6">
						<dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
							<div class="sm:col-span-1">
								<dt class="text-sm font-medium text-gray-500">
									Nombre Completo
								</dt>
								<dd class="mt-1 text-sm text-gray-900">
									Margot Foster
								</dd>
							</div>
							
							<div class="sm:col-span-1">
								<dt class="text-sm font-medium text-gray-500">
									Email 
								</dt>
								<dd class="mt-1 text-sm text-gray-900">
									margotfoster@example.com
								</dd>
							</div>
							
							
							
						</dl>
					</div>
				</div>

			</>
		</div>
	)
}
